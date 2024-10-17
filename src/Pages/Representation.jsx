import React from "react";
import Layout from "../Components/Layout/Layout";

function Representation() {
  return (
    <Layout>
      <div className="w-full p-20 ">
        <div className="">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "right",
            }}
          >
            <thead>
              <tr className=" text-center">
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  آدرس
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  شهر{" "}
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  شماره تماس
                </th>

                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  نام مسئول
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  نام شرکت/فروشگاه
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  شماره
                </th>
              </tr>
            </thead>
            <tbody>
              {/* شهر ساری */}
              <tr className="text-center">
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  ساری - کمربندی شرقی جنب بیمارستان شفا فروشگاه لقمانی
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  ساری
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <a href="09046575603">09046575603</a>
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  آقای لقمانی
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  فروشگاه لقمانی
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>

              {/* شهر یزد  */}
              <tr className="text-center">
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  یزد - میدان مسکن خیابان مقداد فروشگاه لوله و اتصالات محسن شعبه
                  1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  یزد
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <a href="09133547875">09133547875</a>
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  آقای محسن زارع
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  بازرگانی محسن
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
              </tr>
              {/* شهر یزد شعبه 2 */}
              <tr className="text-center">
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  یزد - بلوار دانشجو نرسیده به رستوران سادات اخوی نبش کوچه
                  صالحیه شعبه 2
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  یزد
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <a href="09133547875">09133547875</a>
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  آقای محسن زارع
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  بازرگانی محسن
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Representation;
