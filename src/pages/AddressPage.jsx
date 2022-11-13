import React, { useEffect } from "react";
import "../styles/addressPage.css";
import "../styles/adaptation/AddresAdaption.css";
const AddressPage = () => {
  return (
    <>
      <div className="container_adsress">
        <div className="map">
          <iframe
            className="address_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.315964156283!2d76.93553641548526!3d43.265755979136415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ea1773f7ef1%3A0x4a8c00459474ddf2!2zNDE0INC-0YTQuNGBOyA0INGN0YLQsNC2LCDRg9C70LjRhtCwINCW0LXQu9GC0L7QutGB0LDQvSAzNywg0JDQu9C80LDRgtGLIDA1MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2skg!4v1668275343871!5m2!1sru!2skg"
            loading="lazy"
          ></iframe>
          <h3>
            Республика Казахстан
            <br /> город Алматы
            <br /> ул.Желтоксан 37
            <br /> 4-й этаж, офис 414
          </h3>
        </div>
        <div className="map">
          <iframe
            className="address_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2211373359423!2d74.58099683043297!3d42.86817644419465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82596afc4c1%3A0xba71020761e33d95!2zMTEg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQkdC40YjQutC10LogNzIwMDQw!5e0!3m2!1sru!2skg!4v1668276039137!5m2!1sru!2skg"
            loading="lazy"
          ></iframe>
          <h3>
            Республика Кыргызстан
            <br /> город Бишкек
            <br /> ул. Табышалиева 11
            <br /> офис № 29 <br />
          </h3>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
