"use client";

import { useEffect, useRef, useState } from "react";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: any = null;

    const loadScene = async () => {
      try {
        // Dynamically import Spline runtime
        const { Application } = await import("@splinetool/runtime");
        
        if (canvasRef.current) {
          app = new Application(canvasRef.current);
          await app.load(scene);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load Spline scene:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadScene();

    // Cleanup
    return () => {
      if (app) {
        app.dispose?.();
      }
    };
  }, [scene]);

  if (hasError) {
    return (
      <div className={className}>
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black rounded-lg border border-neutral-800">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🎨</div>
            <p className="text-neutral-300 mb-2">3D Scene</p>
            <p className="text-sm text-neutral-500">
              Interactive visualization
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black rounded-lg z-10">
          <div className="text-neutral-400">Loading 3D scene...</div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
}

