import React from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Order, OrderStatus } from './CustomerDashboard';
import { XIcon } from './icons/XIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { PackageIcon } from './icons/PackageIcon';
import { TruckIcon } from './icons/TruckIcon';

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

const DeliveryTracker: React.FC<{ status: OrderStatus }> = ({ status }) => {
    const { t } = useLanguage();
    const statuses: OrderStatus[] = ['Ordered', 'Packed', 'Shipped', 'Delivered'];
    const currentStatusIndex = statuses.indexOf(status);

    const getIcon = (stepStatus: OrderStatus) => {
        switch(stepStatus) {
            case 'Ordered': return <CheckCircleIcon className="w-6 h-6"/>;
            case 'Packed': return <PackageIcon className="w-6 h-6"/>;
            case 'Shipped': return <TruckIcon className="w-6 h-6"/>;
            case 'Delivered': return <CheckCircleIcon className="w-6 h-6"/>
        }
    }

    return (
        <div>
             <h4 className="text-lg font-bold text-gray-200 mb-4">{t('orders.deliveryTracker')}</h4>
             <div className="flex items-center">
                {statuses.map((s, index) => {
                    const isCompleted = index <= currentStatusIndex;
                    const isCurrent = index === currentStatusIndex;
                    const isNext = index === currentStatusIndex + 1;

                    return (
                        <React.Fragment key={s}>
                            <div className="flex flex-col items-center">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300
                                    ${isCompleted ? 'bg-brand-secondary/20 border-brand-secondary text-brand-secondary' : 'bg-gray-700 border-gray-600 text-gray-400'}
                                `}>
                                    {getIcon(s)}
                                </div>
                                <p className={`mt-2 text-xs font-semibold ${isCompleted ? 'text-white' : 'text-gray-400'}`}>{t(`orders.statusTypes.${s.toLowerCase()}`)}</p>
                            </div>

                            {index < statuses.length - 1 && (
                                <div className={`flex-1 h-1 mx-2 rounded ${isCompleted ? 'bg-brand-secondary' : 'bg-gray-600'}`}></div>
                            )}
                        </React.Fragment>
                    );
                })}
             </div>
        </div>
    );
};


const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ isOpen, onClose, order }) => {
  const { t } = useLanguage();

  if (!isOpen || !order) return null;

  return ReactDOM.createPortal(
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="order-details-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full mx-4 relative transform animate-scale-in border border-gray-700 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-gray-700 flex-shrink-0">
            <h2 id="order-details-modal-title" className="text-2xl font-bold text-white">{t('orders.orderDetails')}</h2>
            <p className="text-sm text-gray-400">{t('orders.orderId')}: {order.id}</p>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label={t('common.close')}>
                <XIcon className="w-6 h-6" />
            </button>
        </header>
        
        <div className="p-6 overflow-y-auto space-y-8">
            {/* Delivery Tracker */}
            <DeliveryTracker status={order.status} />

            {/* Order Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-300 mb-2">{t('payment.shippingTo')}:</h4>
                    <address className="not-italic text-gray-400">
                        <strong>{order.shippingAddress.fullName}</strong><br/>
                        {order.shippingAddress.line1}<br/>
                        {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                    </address>
                </div>
                 <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-300 mb-2">{t('orders.expectedDelivery')}:</h4>
                    <p className="text-white font-semibold text-lg">{new Date(order.expectedDelivery).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>

            {/* Items List */}
            <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">{t('orders.itemsInOrder')}</h4>
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {order.items.map(item => (
                        <div key={item.id} className="flex items-center gap-4">
                            <img src={item.imageUrl} alt={item.title} className="w-14 h-14 object-cover rounded-md" />
                            <div className="flex-grow">
                                <p className="font-semibold text-white">{item.title}</p>
                                <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-semibold text-gray-200">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Price Breakdown */}
            <div>
                <h4 className="text-lg font-bold text-gray-200 mb-3">{t('orders.priceBreakdown')}</h4>
                <div className="bg-gray-700/50 p-4 rounded-lg space-y-2 text-sm">
                     <div className="flex justify-between text-gray-300">
                        <span>{t('payment.subtotal')}</span>
                        <span>₹{order.total.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                        <span>{t('payment.shipping')}</span>
                        <span className="text-brand-secondary">{t('payment.shippingFree')}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-base border-t border-gray-600 pt-2 mt-2">
                        <span>{t('payment.total')}</span>
                        <span>₹{order.total.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default OrderDetailsModal;