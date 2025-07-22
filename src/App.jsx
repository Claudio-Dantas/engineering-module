import React, { useState } from 'react'
import './App.css'
import genesisLogo from './assets/genesis-logo.png'
import Viewer3D from './components/Viewer3D'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState('dashboard')
  const [email, setEmail] = useState('claudiossdantas@gmail.com')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
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

  if (currentView === '3d') {
    return <Viewer3D onBack={() => setCurrentView('dashboard')} />
  }

  // Main Application Layout with Sidebar
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        {/* Logo Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src={genesisLogo} alt="Genesis" className="h-8" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Genesis</h1>
              <p className="text-xs text-gray-500">Engineering Module</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {/* Dashboard */}
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">🏠</span>
              <span className="text-sm font-medium">Dashboard</span>
            </button>

            {/* Project Management */}
            <button
              onClick={() => setCurrentView('projects')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === 'projects'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">📁</span>
              <span className="text-sm font-medium">Projects</span>
            </button>

            {/* Component Library */}
            <button
              onClick={() => setCurrentView('components')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === 'components'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">📚</span>
              <span className="text-sm font-medium">Components</span>
            </button>

            {/* 3D Visualization */}
            <button
              onClick={() => setCurrentView('3d')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === '3d'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">🏗️</span>
              <span className="text-sm font-medium">3D Viewer</span>
            </button>

            {/* Calculations */}
            <button
              onClick={() => setCurrentView('calculations')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === 'calculations'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">🧮</span>
              <span className="text-sm font-medium">Calculations</span>
            </button>

            {/* Reports */}
            <button
              onClick={() => setCurrentView('reports')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                currentView === 'reports'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">📄</span>
              <span className="text-sm font-medium">Reports</span>
            </button>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Settings */}
            <button
              onClick={() => setCurrentView('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors opacity-50 ${
                currentView === 'settings'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">⚙️</span>
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-semibold">A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">claudiossdantas@gmail.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {currentView === 'dashboard' && 'Engineering Dashboard'}
                {currentView === 'projects' && 'Project Management'}
                {currentView === 'components' && 'Component Library'}
                {currentView === 'calculations' && 'Engineering Calculations'}
                {currentView === 'reports' && 'Reports & Documentation'}
                {currentView === 'settings' && 'Settings'}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {currentView === 'dashboard' && 'Manage your engineering projects and components'}
                {currentView === 'projects' && 'View and manage your engineering projects'}
                {currentView === 'components' && 'Browse engineering components and specifications'}
                {currentView === 'calculations' && 'Perform electrical, HVAC, and structural calculations'}
                {currentView === 'reports' && 'Generate project reports and documentation'}
                {currentView === 'settings' && 'Configure application settings'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Welcome, Admin</div>
                <div className="text-xs text-green-600 font-medium">Engineering Module</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {currentView === 'dashboard' && (
            <div className="max-w-6xl">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📁</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">12</p>
                      <p className="text-sm text-gray-600">Active Projects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">247</p>
                      <p className="text-sm text-gray-600">Components</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🧮</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">89</p>
                      <p className="text-sm text-gray-600">Calculations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">34</p>
                      <p className="text-sm text-gray-600">Reports</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="bg-white rounded-lg shadow border border-gray-200 mb-8">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">🏗️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Vila Digital E-House</h4>
                          <p className="text-sm text-gray-600">Digital Infrastructure Corp • VD-EH-001</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Active
                        </span>
                        <p className="text-xs text-gray-500 mt-1">Updated 2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">⛏️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Zafranal Mining E-House</h4>
                          <p className="text-sm text-gray-600">Mining Solutions Ltd • ZM-EH-002</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Completed
                        </span>
                        <p className="text-xs text-gray-500 mt-1">Updated 1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => setCurrentView('projects')}
                      className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">➕</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">New Project</h4>
                          <p className="text-sm text-gray-600">Create a new engineering project</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentView('3d')}
                      className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏗️</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">3D Viewer</h4>
                          <p className="text-sm text-gray-600">Visualize projects in 3D</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentView('reports')}
                      className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Generate Report</h4>
                          <p className="text-sm text-gray-600">Create project documentation</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'projects' && (
            <div className="max-w-6xl">
              <div className="bg-white rounded-lg shadow border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Your Projects</h3>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    + New Project
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">🏗️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Vila Digital E-House</h4>
                          <p className="text-xs text-gray-500">VD-EH-001</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Client:</span> Digital Infrastructure Corp</p>
                        <p><span className="text-gray-600">Version:</span> 1.2</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">⛏️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Zafranal Mining</h4>
                          <p className="text-xs text-gray-500">ZM-EH-002</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Client:</span> Mining Solutions Ltd</p>
                        <p><span className="text-gray-600">Version:</span> 2.1</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className="ml-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Completed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'components' && (
            <div className="max-w-6xl">
              <div className="bg-white rounded-lg shadow border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Engineering Components</h3>
                  <div className="flex gap-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>All Categories</option>
                      <option>Electrical</option>
                      <option>HVAC</option>
                      <option>Structural</option>
                    </select>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                      + Add Component
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">⚡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">ABB VFD ACS880</h4>
                          <p className="text-xs text-gray-500">ACS880-01-145A-3</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Category:</span> Electrical</p>
                        <p><span className="text-gray-600">Manufacturer:</span> ABB</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Available</span>
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">❄️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Carrier Chiller</h4>
                          <p className="text-xs text-gray-500">30XA0302</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Category:</span> HVAC</p>
                        <p><span className="text-gray-600">Manufacturer:</span> Carrier</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Available</span>
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">🔌</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Schneider Contactor</h4>
                          <p className="text-xs text-gray-500">LC1D32M7</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Category:</span> Electrical</p>
                        <p><span className="text-gray-600">Manufacturer:</span> Schneider Electric</p>
                        <p><span className="text-gray-600">Status:</span> 
                          <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(currentView === 'calculations' || currentView === 'reports' || currentView === 'settings') && (
            <div className="max-w-6xl">
              <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">
                    {currentView === 'calculations' && '🧮'}
                    {currentView === 'reports' && '📄'}
                    {currentView === 'settings' && '⚙️'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentView === 'calculations' && 'Engineering Calculations'}
                  {currentView === 'reports' && 'Reports & Documentation'}
                  {currentView === 'settings' && 'Settings'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentView === 'calculations' && 'Advanced calculation tools for electrical, HVAC, and structural engineering.'}
                  {currentView === 'reports' && 'Generate comprehensive project reports and technical documentation.'}
                  {currentView === 'settings' && 'Configure application preferences and user settings.'}
                </p>
                <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                  Coming Soon
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

