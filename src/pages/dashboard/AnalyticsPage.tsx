import React, { useState } from 'react';
import { 
  Target, 
  FileText, 
  Download, 
  Plus, 
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Share2,
  MoreHorizontal
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [showCustomReport, setShowCustomReport] = useState(false);

  const financialMetrics = [
    { label: 'Total Assets', value: '$3.2M', change: '+12.5%', trend: 'up', color: 'text-blue-600' },
    { label: 'Net Worth', value: '$2.1M', change: '+8.3%', trend: 'up', color: 'text-green-600' },
    { label: 'Monthly Revenue', value: '$47,250', change: '+23%', trend: 'up', color: 'text-green-600' },
    { label: 'Monthly Expenses', value: '$18,400', change: '-5.2%', trend: 'down', color: 'text-red-600' },
    { label: 'Cash Reserves', value: '$285,000', change: '+15.7%', trend: 'up', color: 'text-blue-600' },
    { label: 'Debt-to-Income', value: '28.5%', change: '-2.1%', trend: 'down', color: 'text-green-600' }
  ];

  const goals = [
    { title: 'Monthly Revenue Goal', current: 47250, target: 50000, unit: '$', color: 'bg-green-500' },
    { title: 'Properties Acquired', current: 8, target: 12, unit: '', color: 'bg-blue-500' },
    { title: 'ROI Target', current: 18.5, target: 20, unit: '%', color: 'bg-purple-500' },
    { title: 'Cash Flow Goal', current: 4200, target: 5000, unit: '$', color: 'bg-orange-500' }
  ];

  const customReports = [
    { name: 'Monthly Performance Report', type: 'PDF', date: 'Dec 2024', size: '2.4 MB' },
    { name: 'Q4 Financial Summary', type: 'Excel', date: 'Dec 2024', size: '1.8 MB' },
    { name: 'Property Portfolio Analysis', type: 'PDF', date: 'Nov 2024', size: '3.1 MB' },
    { name: 'Market Trends Report', type: 'Excel', date: 'Nov 2024', size: '1.2 MB' }
  ];

  const marketInsights = [
    { metric: 'Market Cap Rate', value: '6.8%', change: '+0.3%', trend: 'up' },
    { metric: 'Average Days on Market', value: '45', change: '-8 days', trend: 'down' },
    { metric: 'Price per Sq Ft', value: '$185', change: '+$12', trend: 'up' },
    { metric: 'Inventory Levels', value: '2.3 months', change: '-0.4 months', trend: 'down' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Analytics</h1>
          <p className="text-gray-600">Manage your analytics</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option> 
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button 
            onClick={() => setShowCustomReport(true)}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Custom Report</span>
            <span className="sm:hidden">Report</span>
          </button>
        </div>
      </div>

      {/* Portfolio Analytics Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Portfolio Analytics</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">$2.4M</div>
            <div className="text-gray-700 text-sm">Total Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">18.5%</div>
            <div className="text-gray-700 text-sm">Average ROI</div>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">$4,200</div>
            <div className="text-gray-700 text-sm">Monthly Cash Flow</div>
          </div>
        </div>
      </div>

      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {financialMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex justify-between items-start mb-2">
              <span className="text-gray-600 text-sm">{metric.label}</span>
              <div className={`flex items-center space-x-1 text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
            <div className={`text-xl sm:text-2xl font-bold ${metric.color}`}>{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Bottom Row Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Conversion Rates Card */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Conversion Rates</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm">Lead to Offer</span>
              <span className="text-gray-800 font-semibold">18.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm">Offer to Contract</span>
              <span className="text-gray-800 font-semibold">32.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm">Contract to Close</span>
              <span className="text-gray-800 font-semibold">89.2%</span>
            </div>
          </div>
        </div>

        {/* Revenue This Month Card */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue This Month</h3>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$47,250</div>
            <div className="text-gray-500 text-sm">+23% from last month</div>
          </div>
        </div>

        {/* Active Campaigns Card */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Active Campaigns</h3>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-500 text-sm">2,395 total contacts</div>
          </div>
        </div>
      </div>

      {/* Goals and Market Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Goal Setting */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <h3 className="text-lg font-bold text-gray-800">Goal Setting</h3>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm self-start sm:self-auto">
              <Target className="w-4 h-4" />
              <span>Set New Goal</span>
            </button>
          </div>
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">{goal.title}</span>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    {goal.current}{goal.unit} / {goal.target}{goal.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${goal.color}`}
                    style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 sm:mb-6">Market Insights</h3>
          <div className="space-y-4">
            {marketInsights.map((insight, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700 text-sm">{insight.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">{insight.value}</span>
                  <div className={`flex items-center space-x-1 text-sm ${
                    insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {insight.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    <span>{insight.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Reports */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
          <h3 className="text-lg font-bold text-gray-800">Custom Reports</h3>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors self-start sm:self-auto">
            <FileText className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {customReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-800 text-sm sm:text-base truncate">{report.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500 truncate">{report.type} • {report.date} • {report.size}</div>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Report Modal */}
      {showCustomReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Generate Custom Report</h2>
              <button onClick={() => setShowCustomReport(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600">×</span>
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
                    <option>Financial Performance</option>
                    <option>Property Portfolio</option>
                    <option>Market Analysis</option>
                    <option>Goal Progress</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
                    <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="format" value="pdf" className="mr-2" defaultChecked />
                      <span className="text-sm sm:text-base">PDF</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="format" value="excel" className="mr-2" />
                      <span className="text-sm sm:text-base">Excel</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                  <button onClick={() => setShowCustomReport(false)} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 