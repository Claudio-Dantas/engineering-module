import React, { useState } from 'react'
import './App.css'
import genesisLogo from './assets/genesis-logo.png'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState('dashboard')
  const [email, setEmail] = useState('claudiossdantas@gmail.com')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Simular login - aceita qualquer senha
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentView('dashboard')
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Genesis Logo */}
          <div className="text-center mb-8">
            <img 
              src={genesisLogo} 
              alt="Genesis" 
              className="h-12 mx-auto mb-4"
              style={{ maxWidth: '200px' }}
            />
            <p className="text-gray-600 text-lg font-medium">
              Secure E-House Configuration Platform
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Engineering Module
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Welcome</h2>
            <p className="text-center text-gray-600 mb-6">Sign in to access the engineering module</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By using E-House Genesis, you agree to our terms of service and privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === 'projects') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="mr-4 p-2 text-gray-400 hover:text-gray-600"
                >
                  ←
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                  📁 Project Management
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <img src={genesisLogo} alt="Genesis" className="h-6" />
                <span className="text-sm text-gray-600">Welcome, Admin</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Your Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Vila Digital E-House</h3>
                <p className="text-sm text-gray-600">Client: Digital Infrastructure Corp</p>
                <p className="text-sm text-gray-600">SE Reference: VD-EH-001</p>
                <p className="text-sm text-gray-600">Version: 1.2</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Active
                </span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Zafranal Mining</h3>
                <p className="text-sm text-gray-600">Client: Mining Solutions Ltd</p>
                <p className="text-sm text-gray-600">SE Reference: ZM-EH-002</p>
                <p className="text-sm text-gray-600">Version: 2.1</p>
                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === 'components') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="mr-4 p-2 text-gray-400 hover:text-gray-600"
                >
                  ←
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                  📚 Component Library
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <img src={genesisLogo} alt="Genesis" className="h-6" />
                <span className="text-sm text-gray-600">Welcome, Admin</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Engineering Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">ABB VFD ACS880</h3>
                <p className="text-sm text-gray-600">Category: Electrical</p>
                <p className="text-sm text-gray-600">Manufacturer: ABB</p>
                <p className="text-sm text-gray-600">Model: ACS880-01-145A-3</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Available
                </span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Schneider Contactor</h3>
                <p className="text-sm text-gray-600">Category: Electrical</p>
                <p className="text-sm text-gray-600">Manufacturer: Schneider Electric</p>
                <p className="text-sm text-gray-600">Model: LC1D32M7</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Available
                </span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Carrier Chiller</h3>
                <p className="text-sm text-gray-600">Category: HVAC</p>
                <p className="text-sm text-gray-600">Manufacturer: Carrier</p>
                <p className="text-sm text-gray-600">Model: 30XA0302</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-medium text-gray-900">
                Engineering Module
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src={genesisLogo} 
                alt="Genesis" 
                className="h-8"
              />
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  Welcome, Admin
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  admin
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Engineering Dashboard
          </h2>
          <p className="text-gray-600">
            Manage your engineering projects and components
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project Management */}
          <div 
            onClick={() => setCurrentView('projects')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Project Management
            </h3>
            <p className="text-gray-600">
              View and manage your engineering projects
            </p>
          </div>

          {/* Component Library */}
          <div 
            onClick={() => setCurrentView('components')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Component Library
            </h3>
            <p className="text-gray-600">
              Browse engineering components and specifications
            </p>
          </div>

          {/* Calculations */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧮</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Engineering Calculations
            </h3>
            <p className="text-gray-600">
              Perform electrical, HVAC, and structural calculations
            </p>
          </div>

          {/* Reports */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Reports
            </h3>
            <p className="text-gray-600">
              Generate project reports and documentation
            </p>
          </div>

          {/* 3D Visualization */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer opacity-50">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              3D Visualization
            </h3>
            <p className="text-gray-600">
              View projects in 3D
            </p>
            <div className="mt-2 text-xs text-gray-500">Coming Soon</div>
          </div>

          {/* Settings */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer opacity-50">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Settings
            </h3>
            <p className="text-gray-600">
              Configure application settings
            </p>
            <div className="mt-2 text-xs text-gray-500">Coming Soon</div>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="text-green-600">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Login Successful!
              </h3>
              <p className="text-green-700 mt-1">
                Welcome to the Engineering Module. You can now access all available features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

