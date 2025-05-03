
type Order = {
  id: string;
  product: string;
  price: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
};

const orders: Order[] = [
  {
    id: 'ORD001',
    product: 'Wireless Headphones',
    price: 59.99,
    status: 'Delivered',
    date: '2025-04-25',
  },
  {
    id: 'ORD002',
    product: 'Laptop Stand',
    price: 29.99,
    status: 'Shipped',
    date: '2025-04-28',
  },
  {
    id: 'ORD003',
    product: 'Bluetooth Speaker',
    price: 79.99,
    status: 'Pending',
    date: '2025-05-01',
  },
];

export default function Order() {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">${order.price.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Shipped'
                        ? 'bg-yellow-100 text-yellow-700'
                        : order.status === 'Pending'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
