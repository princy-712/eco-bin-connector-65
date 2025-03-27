
import React, { useState, useRef, useEffect } from 'react';
import { Camera, Trash2, AlertCircle, Leaf, FileBox, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Simulated waste types the AI can detect
const wasteTypes = [
  { id: 'plastic', name: 'Plastic', icon: <FileBox className="text-blue-500" />, color: 'bg-blue-500', disposal: 'Recycle in blue bin' },
  { id: 'organic', name: 'Organic', icon: <Leaf className="text-green-500" />, color: 'bg-green-500', disposal: 'Compost in green bin' },
  { id: 'paper', name: 'Paper', icon: <FileBox className="text-yellow-500" />, color: 'bg-yellow-500', disposal: 'Recycle in yellow bin' },
  { id: 'ewaste', name: 'E-Waste', icon: <Zap className="text-purple-500" />, color: 'bg-purple-500', disposal: 'Drop at e-waste collection center' },
  { id: 'hazardous', name: 'Hazardous', icon: <AlertCircle className="text-red-500" />, color: 'bg-red-500', disposal: 'Take to hazardous waste facility' },
  { id: 'general', name: 'General Waste', icon: <Trash2 className="text-gray-500" />, color: 'bg-gray-500', disposal: 'Dispose in general waste bin' },
];

const AIWasteDetector: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedWaste, setDetectedWaste] = useState<typeof wasteTypes[0] | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraActive, setCameraActive] = useState(false);

  // Simulated AI processing
  const processImage = () => {
    setIsProcessing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Randomly select a waste type to simulate detection
      const randomIndex = Math.floor(Math.random() * wasteTypes.length);
      const detected = wasteTypes[randomIndex];
      
      // Simulate confidence level (70-98%)
      const randomConfidence = Math.floor(Math.random() * 28) + 70;
      
      setDetectedWaste(detected);
      setConfidence(randomConfidence);
      setIsProcessing(false);
      
      toast.success(`Detected ${detected.name} with ${randomConfidence}% confidence`);
    }, 2000); // 2 second "processing" time
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw video frame on canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to image data URL
        const imageDataUrl = canvas.toDataURL('image/png');
        setCapturedImage(imageDataUrl);
        
        // Process the captured image
        processImage();
      }
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Could not access camera. Please ensure you've granted camera permissions.");
      
      // Fallback to simulate the process without camera
      setCameraActive(true);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
      setDetectedWaste(null);
      setCapturedImage(null);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up camera on component unmount
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">AI-Powered Waste Detection</h2>
        <p className="text-gray-600">
          Use your camera to identify waste types and get proper disposal guidance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
            {cameraActive ? (
              <video 
                ref={videoRef}
                autoPlay 
                playsInline
                className="w-full h-full object-cover"
              />
            ) : capturedImage ? (
              <img 
                src={capturedImage} 
                alt="Captured waste" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="text-center p-8">
                <Camera size={48} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">Camera preview will appear here</p>
              </div>
            )}
            
            {isProcessing && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-2"></div>
                  <p>Processing image...</p>
                </div>
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} className="hidden" />
          
          <div className="flex space-x-2">
            {!cameraActive ? (
              <button 
                onClick={startCamera} 
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <Camera size={18} />
                <span>Start Camera</span>
              </button>
            ) : (
              <>
                <button 
                  onClick={captureImage} 
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                  disabled={isProcessing}
                >
                  <Camera size={18} />
                  <span>Capture</span>
                </button>
                <button 
                  onClick={stopCamera} 
                  className="btn-secondary flex items-center justify-center px-4"
                >
                  <span>Cancel</span>
                </button>
              </>
            )}
          </div>
        </div>
        
        <div>
          {detectedWaste ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Detection Results</h3>
                <div className={`p-4 rounded-lg ${detectedWaste.color} bg-opacity-10 border border-opacity-20 ${detectedWaste.color.replace('bg-', 'border-')}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${detectedWaste.color} rounded-full flex items-center justify-center`}>
                      {detectedWaste.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{detectedWaste.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${detectedWaste.color} h-2 rounded-full`} 
                            style={{ width: `${confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Disposal Guidance</h3>
                <p className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  {detectedWaste.disposal}
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Did we get it right?</h3>
                <div className="flex gap-2">
                  {wasteTypes.map((waste) => (
                    <button
                      key={waste.id}
                      onClick={() => setDetectedWaste(waste)}
                      className={`p-2 rounded-full ${detectedWaste.id === waste.id ? waste.color : 'bg-gray-100'} ${detectedWaste.id === waste.id ? 'text-white' : 'text-gray-600'}`}
                      title={waste.name}
                    >
                      {React.cloneElement(waste.icon, { 
                        size: 18,
                        className: detectedWaste.id === waste.id ? 'text-white' : undefined
                      })}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mb-4">
                <Camera className="text-eco-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">No Waste Detected</h3>
              <p className="text-gray-600 mb-4">
                Point your camera at waste to identify it and receive proper disposal guidance.
              </p>
              <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                {wasteTypes.slice(0, 6).map((waste) => (
                  <div 
                    key={waste.id} 
                    className="flex flex-col items-center p-2 text-center"
                  >
                    <div className={`w-8 h-8 ${waste.color} bg-opacity-20 rounded-full flex items-center justify-center mb-1`}>
                      {React.cloneElement(waste.icon, { size: 16 })}
                    </div>
                    <span className="text-xs font-medium">{waste.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold mb-2">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 flex-shrink-0 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green">
              1
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Capture an image using your device's camera
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 flex-shrink-0 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green">
              2
            </div>
            <div>
              <p className="text-sm text-gray-600">
                AI model analyzes and classifies the waste type
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 flex-shrink-0 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green">
              3
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Receive disposal guidance based on classification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWasteDetector;
