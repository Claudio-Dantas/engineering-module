import React, { useState, useRef, useEffect } from 'react'

const Viewer3D = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState('vila-digital')
  const [viewMode, setViewMode] = useState('overview')
  const [rotation, setRotation] = useState({ x: -20, y: 45 })
  const [zoom, setZoom] = useState(1)
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })

  const projects = {
    'vila-digital': {
      name: 'Vila Digital E-House',
      components: [
        { id: 1, name: 'Main Panel', type: 'electrical', x: 0, y: 0, z: 0, color: '#3B82F6' },
        { id: 2, name: 'VFD Cabinet', type: 'electrical', x: 2, y: 0, z: 0, color: '#EF4444' },
        { id: 3, name: 'HVAC Unit', type: 'hvac', x: 0, y: 0, z: 2, color: '#10B981' },
        { id: 4, name: 'Control Room', type: 'structural', x: -2, y: 0, z: 0, color: '#F59E0B' },
        { id: 5, name: 'Transformer', type: 'electrical', x: 0, y: 0, z: -2, color: '#8B5CF6' },
      ]
    },
    'zafranal': {
      name: 'Zafranal Mining E-House',
      components: [
        { id: 1, name: 'Mining Panel', type: 'electrical', x: 0, y: 0, z: 0, color: '#DC2626' },
        { id: 2, name: 'Dust Control', type: 'hvac', x: 3, y: 0, z: 0, color: '#059669' },
        { id: 3, name: 'Safety Systems', type: 'safety', x: 0, y: 0, z: 3, color: '#D97706' },
        { id: 4, name: 'Power Distribution', type: 'electrical', x: -3, y: 0, z: 0, color: '#7C3AED' },
        { id: 5, name: 'Monitoring Station', type: 'instrumentation', x: 0, y: 0, z: -3, color: '#0891B2' },
      ]
    }
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    
    const deltaX = e.clientX - lastMouse.current.x
    const deltaY = e.clientY - lastMouse.current.y
    
    setRotation(prev => ({
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5
    }))
    
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleWheel = (e) => {
    e.preventDefault()
    setZoom(prev => Math.max(0.5, Math.min(3, prev - e.deltaY * 0.001)))
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const resetView = () => {
    setRotation({ x: -20, y: 45 })
    setZoom(1)
  }

  const takeScreenshot = () => {
    alert('Screenshot functionality would capture the 3D view')
  }

  const currentProject = projects[selectedProject]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="mr-4 p-2 text-gray-400 hover:text-gray-600"
              >
                ←
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                🏗️ 3D Visualization
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              
              {/* Project Selection */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Project</h3>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="vila-digital">Vila Digital E-House</option>
                  <option value="zafranal">Zafranal Mining E-House</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">View Mode</h3>
                <div className="space-y-2">
                  {['overview', 'detailed', 'components'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        viewMode === mode
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Camera Controls */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Camera</h3>
                <div className="space-y-2">
                  <button
                    onClick={resetView}
                    className="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700"
                  >
                    Reset View
                  </button>
                  <button
                    onClick={takeScreenshot}
                    className="w-full bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700"
                  >
                    Screenshot
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Project Info</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Name:</strong> {currentProject.name}</p>
                  <p><strong>Components:</strong> {currentProject.components.length}</p>
                  <p><strong>Zoom:</strong> {Math.round(zoom * 100)}%</p>
                  <p><strong>Rotation:</strong> X:{Math.round(rotation.x)}° Y:{Math.round(rotation.y)}°</p>
                </div>
              </div>

              {/* Component List */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Components</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {currentProject.components.map((component) => (
                    <div key={component.id} className="flex items-center space-x-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: component.color }}
                      ></div>
                      <span className="text-gray-700">{component.name}</span>
                      <span className="text-gray-500 text-xs">({component.type})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3D Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-2 text-sm">
                3D Viewer - {currentProject.name} ({viewMode} mode)
              </div>
              
              <div 
                ref={containerRef}
                className="relative bg-gradient-to-b from-blue-100 to-blue-200 cursor-grab active:cursor-grabbing"
                style={{ height: '600px' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* 3D Scene Container */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    perspective: '1000px',
                    transform: `scale(${zoom})`
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                    }}
                  >
                    {/* Grid Floor */}
                    <div
                      className="absolute border border-gray-300 opacity-30"
                      style={{
                        width: '400px',
                        height: '400px',
                        transform: 'rotateX(90deg) translateZ(-50px)',
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        left: '-200px',
                        top: '-200px'
                      }}
                    ></div>

                    {/* Components */}
                    {currentProject.components.map((component) => (
                      <div
                        key={component.id}
                        className="absolute rounded-lg shadow-lg border-2 border-white cursor-pointer hover:shadow-xl transition-all duration-200"
                        style={{
                          width: '80px',
                          height: '60px',
                          backgroundColor: component.color,
                          transform: `translate3d(${component.x * 80}px, ${component.z * 80}px, ${component.y * 60}px)`,
                          left: '-40px',
                          top: '-30px'
                        }}
                        title={component.name}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-xs font-bold text-center px-1">
                            {component.name.split(' ')[0]}
                          </div>
                        </div>
                        
                        {/* Component shadow */}
                        <div
                          className="absolute bg-black opacity-20 rounded-lg"
                          style={{
                            width: '80px',
                            height: '60px',
                            transform: `translateZ(-${component.y * 60 + 50}px) rotateX(90deg)`,
                            left: '0',
                            top: '30px'
                          }}
                        ></div>
                      </div>
                    ))}

                    {/* Axis indicators */}
                    <div className="absolute" style={{ transform: 'translate3d(0, 0, 0)' }}>
                      {/* X axis - Red */}
                      <div
                        className="absolute bg-red-500"
                        style={{
                          width: '100px',
                          height: '2px',
                          transform: 'translateX(0)'
                        }}
                      ></div>
                      {/* Y axis - Green */}
                      <div
                        className="absolute bg-green-500"
                        style={{
                          width: '2px',
                          height: '100px',
                          transform: 'translateY(-100px)'
                        }}
                      ></div>
                      {/* Z axis - Blue */}
                      <div
                        className="absolute bg-blue-500"
                        style={{
                          width: '2px',
                          height: '100px',
                          transform: 'rotateY(90deg) translateY(-50px)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xs px-3 py-2 rounded">
                  Drag to rotate • Scroll to zoom • Click components for details
                </div>

                {/* View Mode Indicator */}
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  {viewMode.toUpperCase()} MODE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewer3D

