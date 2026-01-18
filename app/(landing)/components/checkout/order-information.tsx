import CardWithHeader from "../ui/card-with-header";

export default function OrderInformation() {
  return (
    <CardWithHeader title="Order Information">
      <div className="py-5">
        <div className="input-group"> 
          {/* cek global.css */}
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" />
        </div>
        <div className="input-group">
          <label htmlFor="whatsapp_number">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="whatsapp_number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="shipping_address"
            rows={7}
          />
        </div>
      </div>
    </CardWithHeader>
  );
}
