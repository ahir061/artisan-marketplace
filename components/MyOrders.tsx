import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Order } from './CustomerDashboard';
import { EyeIcon } from './icons/EyeIcon';
import OrderDetailsModal from './OrderDetailsModal';

interface MyOrdersProps {
  orders: Order[];
}

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'Delivered':
            return 'bg-green-500/10 text-green-400';
        case 'Shipped':
            return 'bg-blue-500/10 text-blue-400';
        case 'Packed':
            return 'bg-yellow-500/10 text-yellow-400';
        case 'Ordered':
        default:
            return 'bg-gray-600/20 text-gray-300';
    }
}

const OrderCard: React.FC<{ order: Order, onViewDetails: () => void }> = ({ order, onViewDetails }) => {
    const { t } = useLanguage();

    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div>
                <p className="text-xs text-gray-400">{t('orders.orderId')}</p>
                <p className="font-mono text-white font-semibold">{order.id}</p>
            </div>
            <div>
                <p className="text-xs text-gray-400">{t('orders.orderDate')}</p>
                <p className="text-white">{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="mt-4 md:mt-0">
                <p className="text-xs text-gray-400">{t('orders.totalAmount')}</p>
                <p className="font-bold text-xl text-brand-secondary">₹{order.total.toLocaleString('en-IN')}</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-2">
                <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${getStatusStyles(order.status)}`}>
                    {t(`orders.statusTypes.${order.status.toLowerCase()}`)}
                </div>
                <button
                    onClick={onViewDetails}
                    className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-amber-400 transition-colors"
                >
                    <EyeIcon className="w-4 h-4" />
                    {t('customerDashboard.viewDetails')}
                </button>
            </div>
        </div>
    );
};

const MyOrders: React.FC<MyOrdersProps> = ({ orders }) => {
    const { t } = useLanguage();
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
    };

    return (
        <>
            <div className="animate-fade-in-fast">
                <h1 className="text-3xl font-bold text-white text-shadow-md mb-6">{t('orders.title')}</h1>
                {orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <OrderCard key={order.id} order={order} onViewDetails={() => handleViewDetails(order)} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border-2 border-dashed border-gray-700 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-300">{t('orders.emptyState')}</h2>
                        <p className="text-gray-400 mt-2">{t('orders.emptyStateSubtext')}</p>
                    </div>
                )}
            </div>

            <OrderDetailsModal
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
                order={selectedOrder}
            />
        </>
    );
};

export default MyOrders;