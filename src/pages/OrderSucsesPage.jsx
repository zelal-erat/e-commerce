import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const OrderSuccess = () => {
   const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/"); // 3 saniye sonra ana sayfaya yönlendir
        }, 3000);
    }, [history]);

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">
                🎉 Siparişiniz Başarıyla Oluşturuldu!
            </h2>
            <p className="mt-2 text-gray-700">
                Sipariş detaylarınız e-posta adresinize gönderildi.
            </p>
            <p className="mt-4 text-sm text-gray-500">
                Ana sayfaya yönlendiriliyorsunuz...
            </p>
        </div>
    );
};

export default OrderSuccess;
