'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AISetup() {
  const [formData, setFormData] = useState({
    apiKey: '',
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 1000,
    systemPrompt: 'You are a helpful AI assistant.',
    enableMemory: true,
    enableContext: true
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveMessage('')

    // Simulate saving to API
    setTimeout(() => {
      setIsSaving(false)
      setSaveMessage('Settings saved successfully!')
      setTimeout(() => setSaveMessage(''), 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                AI Assistant
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/ai-setup" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                AI Setup
              </Link>
              <Link 
                href="/login" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">AI Configuration Setup</h1>
            <p className="text-blue-100 mt-1">Configure your AI assistant settings and preferences</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* API Configuration */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">API Configuration</h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                    API Key
                  </label>
                  <input
                    type="password"
                    id="apiKey"
                    name="apiKey"
                    value={formData.apiKey}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                    placeholder="Enter your API key"
                  />
                  <p className="mt-1 text-sm text-gray-500">Your API key will be encrypted and stored securely</p>
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                    AI Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  >
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-4-turbo">GPT-4 Turbo</option>
                    <option value="claude-3">Claude 3</option>
                    <option value="gemini-pro">Gemini Pro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
                    Temperature: {formData.temperature}
                  </label>
                  <input
                    type="range"
                    id="temperature"
                    name="temperature"
                    min="0"
                    max="2"
                    step="0.1"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    className="mt-1 block w-full"
                  />
                  <p className="mt-1 text-sm text-gray-500">Controls randomness: 0 = focused, 2 = creative</p>
                </div>

                <div>
                  <label htmlFor="maxTokens" className="block text-sm font-medium text-gray-700">
                    Max Tokens
                  </label>
                  <input
                    type="number"
                    id="maxTokens"
                    name="maxTokens"
                    min="100"
                    max="4000"
                    value={formData.maxTokens}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                  />
                  <p className="mt-1 text-sm text-gray-500">Maximum response length</p>
                </div>
              </div>
            </div>

            {/* Behavior Settings */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Behavior Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="systemPrompt" className="block text-sm font-medium text-gray-700">
                    System Prompt
                  </label>
                  <textarea
                    id="systemPrompt"
                    name="systemPrompt"
                    rows={3}
                    value={formData.systemPrompt}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                    placeholder="Define the AI's behavior and personality"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="enableMemory"
                      name="enableMemory"
                      type="checkbox"
                      checked={formData.enableMemory}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="enableMemory" className="ml-2 block text-sm text-gray-900">
                      Enable conversation memory
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="enableContext"
                      name="enableContext"
                      type="checkbox"
                      checked={formData.enableContext}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="enableContext" className="ml-2 block text-sm text-gray-900">
                      Enable context awareness
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                ← Back to Home
              </Link>
              
              <div className="flex items-center space-x-4">
                {saveMessage && (
                  <span className="text-green-600 text-sm font-medium">{saveMessage}</span>
                )}
                
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Start with a higher temperature (0.8-1.0) for creative tasks</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Use lower temperature (0.2-0.4) for analytical and factual responses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Keep your system prompt concise but clear about the AI's role</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Enable memory for longer conversations that need context retention</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
