
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IndianRupee, Calendar, CreditCard, Download, AlertTriangle } from 'lucide-react';

const feeData = {
  totalAnnualFees: 45000,
  paidAmount: 30000,
  dueAmount: 15000,
  nextDueDate: '2024-02-15',
  breakdown: [
    { category: 'Tuition Fee', amount: 25000, paid: 18000, status: 'partial' },
    { category: 'Development Fee', amount: 8000, paid: 8000, status: 'paid' },
    { category: 'Transport Fee', amount: 6000, paid: 4000, status: 'partial' },
    { category: 'Activity Fee', amount: 3000, paid: 0, status: 'pending' },
    { category: 'Library Fee', amount: 2000, paid: 0, status: 'pending' },
    { category: 'Exam Fee', amount: 1000, paid: 0, status: 'pending' }
  ],
  paymentHistory: [
    { date: '2024-01-10', amount: 12000, method: 'Online Banking', receipt: 'RCP001', status: 'Success' },
    { date: '2023-12-15', amount: 10000, method: 'UPI Payment', receipt: 'RCP002', status: 'Success' },
    { date: '2023-11-20', amount: 8000, method: 'Debit Card', receipt: 'RCP003', status: 'Success' }
  ]
};

export const Fees = () => {
  const paidPercentage = (feeData.paidAmount / feeData.totalAnnualFees) * 100;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'partial':
        return <Badge className="bg-yellow-100 text-yellow-800">Partial</Badge>;
      case 'pending':
        return <Badge className="bg-red-100 text-red-800">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
        <p className="text-gray-600">Track your fee payments and due amounts</p>
      </div>

      {/* Fee Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <IndianRupee className="w-5 h-5" />
              Total Annual Fees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              ₹{feeData.totalAnnualFees.toLocaleString('en-IN')}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CreditCard className="w-5 h-5" />
              Amount Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ₹{feeData.paidAmount.toLocaleString('en-IN')}
            </div>
            <Progress value={paidPercentage} className="mt-2" />
            <div className="text-sm text-green-600 mt-2">
              {paidPercentage.toFixed(1)}% completed
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              Amount Due
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              ₹{feeData.dueAmount.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-600">Due: {feeData.nextDueDate}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fee Breakdown */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Fee Breakdown</CardTitle>
          <Button size="sm">
            <CreditCard className="w-4 h-4 mr-2" />
            Pay Now
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Category</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeData.breakdown.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.category}</TableCell>
                  <TableCell>₹{item.amount.toLocaleString('en-IN')}</TableCell>
                  <TableCell>₹{item.paid.toLocaleString('en-IN')}</TableCell>
                  <TableCell>₹{(item.amount - item.paid).toLocaleString('en-IN')}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feeData.paymentHistory.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">₹{payment.amount.toLocaleString('en-IN')}</div>
                    <div className="text-sm text-gray-600">{payment.date}</div>
                    <div className="text-sm text-gray-500">{payment.method}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800 mb-2">
                    {payment.status}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Receipt: {payment.receipt}</span>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <CreditCard className="w-8 h-8 mb-2" />
              <span>Online Banking</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <IndianRupee className="w-8 h-8 mb-2" />
              <span>UPI Payment</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <CreditCard className="w-8 h-8 mb-2" />
              <span>Debit/Credit Card</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
