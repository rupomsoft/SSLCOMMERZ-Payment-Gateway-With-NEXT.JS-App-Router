
import {NextResponse} from "next/server";
export async function POST() {

    try {
       const tran_id=(Math.floor(100000 + Math.random() * 900000)).toString();
       const init_url='https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

        const formData = new FormData();
        formData.append("store_id", "teamr64c9e84055219");
        formData.append("store_passwd", "teamr64c9e84055219@ssl");
        formData.append("total_amount", "1000");
        formData.append("currency", "BDT");
        formData.append("tran_id", `${tran_id}`);
        formData.append("success_url",`http://localhost:3000/api/success?id=${tran_id}`);
        formData.append("fail_url",`http://localhost:3000/api/fail?id=${tran_id}`);
        formData.append("cancel_url",`http://localhost:3000/api/cancel?id=${tran_id}`);
        formData.append("ipn_url",`http://localhost:3000/api/ipn?id=${tran_id}`);
        formData.append("cus_name",'Rabbil Hasan');
        formData.append("cus_email",'engr.rabbil@yahoo.com');
        formData.append('cus_add1','Shekhertek 8 Dhaka 1207');
        formData.append('cus_add2','Shekhertek 8 Dhaka 1207');
        formData.append('cus_city','Dhaka');
        formData.append('cus_state','Dhaka');
        formData.append('cus_postcode','1207');
        formData.append('cus_country','Bangladesh');
        formData.append('cus_phone','01701063280');
        formData.append('cus_fax','01701063280');
        formData.append('shipping_method','YES');
        formData.append('ship_name','Rabbil Hasan');
        formData.append('ship_add1','Shekhertek 8 Dhaka 1207');
        formData.append('ship_add2','Shekhertek 8 Dhaka 1207');
        formData.append('ship_city','Dhaka');
        formData.append('ship_state','Dhaka');
        formData.append('ship_country','Bangladesh');
        formData.append('ship_postcode','1207');
        formData.append('product_name','product_name');
        formData.append('product_category','category');
        formData.append('product_profile','profile');
        formData.append('product_amount','3');


        const requestOptions = {method: 'POST', body: formData}
        let SSLRes=await fetch(init_url, requestOptions)

        let SSLResJSON=await SSLRes.json();

        return NextResponse.json({data:SSLResJSON})
    }
    catch (e) {
        return NextResponse.json({data:e})
    }



}