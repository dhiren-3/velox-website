'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AuroraBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.display = 'block';
    currentMount.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: { 
        iTime: { value: 0 }, 
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } 
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float iTime; 
        uniform vec2 iResolution;
        #define NUM_OCTAVES 3
        float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
        float noise(vec2 p){ 
          vec2 ip=floor(p);
          vec2 u=fract(p);
          u=u*u*(3.0-2.0*u);
          float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
          return res*res; 
        }
        float fbm(vec2 x) { 
          float v=0.0;
          float a=0.3;
          vec2 shift=vec2(100);
          mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));
          for(int i=0;i<NUM_OCTAVES;++i){
            v+=a*noise(x);
            x=rot*x*2.0+shift;
            a*=0.4;
          }
          return v;
        }
        void main() {
          vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);
          vec4 o=vec4(0.);
          float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
          for(float i=0.;i++<35.;){
            vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;
            float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));
            vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.3),.5+.4*cos(i*.25+iTime*.4),.2+.25*sin(i*.3+iTime*.35),1.);
            vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));
            float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;
            o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;
          }
          o=tanh(pow(o/100.,vec4(1.6)));
          gl_FragColor=o*1.5;
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    const animate = () => { 
      animationFrameId = requestAnimationFrame(animate); 
      material.uniforms.iTime.value += 0.016; 
      renderer.render(scene, camera); 
    };

    const handleResize = () => { 
      renderer.setSize(window.innerWidth, window.innerHeight); 
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight); 
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => { 
      cancelAnimationFrame(animationFrameId); 
      window.removeEventListener('resize', handleResize); 
      if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); 
      renderer.dispose(); 
      material.dispose(); 
      geometry.dispose(); 
    };
  }, []);

  return <div ref={mountRef} />;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const videoRotateX = useTransform(scrollYProgress, [0, 0.5], [25, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505]">
      <AuroraBackground />
      
      <div className="relative">
        <nav className="w-full px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
                <span className="text-sm font-bold text-black">VX</span>
              </div>
              <span className="text-lg font-medium text-white">Velox</span>
            </div>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-400 px-6 py-2.5 rounded-xl text-black text-sm font-bold shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all"
            >
              Request Pilot
            </button>
          </div>
        </nav>

        <main className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 float-animation">
              <div className="mb-6">
                <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  For US Freight Forwarders & 3PLs doing $10M+
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-white tracking-tight mb-4">
                Stop Paying Clerks to Type.
                <span className="block mt-2 bg-gradient-to-r from-white via-emerald-200 to-emerald-500 bg-clip-text text-transparent tracking-tight">
                  Automate Your AP in 48 Hours.
                </span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl leading-relaxed font-light text-gray-300 mx-auto mt-6">
                We deploy an invisible AI agent into your inbox that extracts data from PDF invoices and pushes it directly into your ERP with 99.9% accuracy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 hover:bg-emerald-400 px-8 py-4 text-black rounded-xl font-bold text-base min-w-[200px] shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all"
              >
                Apply for Pilot
              </button>
              <button 
                onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="backdrop-blur-md bg-white/5 border border-white/10 min-w-[200px] text-base font-medium text-white rounded-xl px-8 py-4 hover:bg-white/10 hover:border-emerald-500/30 transition-all"
              >
                Watch Demo
              </button>
            </div>

            <div style={{ perspective: '1200px' }} className="max-w-4xl mx-auto">
              <motion.div
                id="demo-video"
                style={{
                  scale: videoScale,
                  rotateX: videoRotateX,
                  transformStyle: 'preserve-3d'
                }}
                className="relative aspect-video overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-emerald-900/40 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                
                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-emerald-500/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-emerald-400 border-b-[12px] border-b-transparent ml-1" />
                    </div>
                    <span className="text-sm font-medium text-emerald-200">
                      30-Second Demo Video
                    </span>
                  </div>
                </div>

                <div className="absolute -inset-[2px] -z-10 rounded-2xl bg-gradient-to-r from-emerald-500/50 via-green-500/50 to-emerald-500/50 opacity-60 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
