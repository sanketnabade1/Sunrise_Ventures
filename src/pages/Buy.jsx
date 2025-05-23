import "../assets/css/buy.css";

export default function Buy() {
  return (
    <div>


<title>Buy property</title>






    <div className="bgimage">
        <img src="/house.jpeg" alt="house" />
    </div>
    <div className="overall">
        <div className="form-container">
            <h2>Property Inquiry Form</h2>
            <form action="/realEstate/buy" method="POST">
                {/* Name */}
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required  />

                {/* Whatsapp Number */}
                <label for="whatsappNumber">Whatsapp Number:</label>
                <input type="text" id="whatsappNumber" name="whatsappNumber" required maxlength="10" minlength="10"  />

                {/* Mobile Number (If Different) */}
                <label for="mobileNumber">Mobile Number (If Different):</label>
                <input type="text" id="mobileNumber" name="mobileNumber" maxlength="10" minlength="10"  />

                {/* E-mail ID */}
                <label for="email">E-mail ID:</label>
                <input type="email" id="email" name="email" required  />

                {/* Drop Down State (Where he wants property) */}
                <label for="state">State (Where you want property):</label>
                <select id="state" name="state" required>
                    <option value="">Select a State</option>
                    <option value="Andaman and Nicobar (AN)">Andaman and Nicobar (AN)</option>
                    <option value="Arunachal Pradesh (AR)">Arunachal Pradesh (AR)</option>
                    <option value="Andhra Pradesh (AP)">Andhra Pradesh (AP)</option>
                    <option value="Bihar (BR)">Bihar (BR)</option>
                    <option value="Assam (AS)">Assam (AS)</option>
                    <option value="Chhattisgarh (CG)">Chhattisgarh (CG)</option>
                    <option value="Chandigarh (CH)">Chandigarh (CH)</option>
                    <option value="Daman and Diu (DD)">Daman and Diu (DD)</option>
                    <option value="Dadra and Nagar Haveli (DN)">Dadra and Nagar Haveli (DN)</option>
                    <option value="Delhi (DL)">Delhi (DL)</option>
                    <option value="Goa (GA)">Goa (GA)</option>
                    <option value="Gujarat (GJ)">Gujarat (GJ)</option>
                    <option value="Haryana (HR)">Haryana (HR)</option>
                    <option value="Himachal Pradesh (HP)">Himachal Pradesh (HP)</option>
                    <option value="Jammu and Kashmir (JK)">Jammu and Kashmir (JK)</option>
                    <option value="Jharkhand (JH)">Jharkhand (JH)</option>
                    <option value="Karnataka (KA)">Karnataka (KA)</option>
                    <option value="Kerala (KL)">Kerala (KL)</option>
                    <option value="Lakshdweep (LD)">Lakshdweep (LD)</option>
                    <option value="Madhya Pradesh (MP)">Madhya Pradesh (MP)</option>
                    <option value="Maharashtra (MH)">Maharashtra (MH)</option>
                    <option value="Manipur (MN)">Manipur (MN)</option>
                    <option value="Meghalaya (ML)">Meghalaya (ML)</option>
                    <option value="Mizoram (MZ)">Mizoram (MZ)</option>
                    <option value="Odisha (OD)">Odisha (OD)</option>
                    <option value="Puducherry (PY)">Puducherry (PY)</option>
                    <option value="Nagaland (NL)">Nagaland (NL)</option>
                    <option value="Punjab (PB)">Punjab (PB)</option>
                    <option value="Rajasthan (RJ)">Rajasthan (RJ)</option>
                    <option value="Sikkim (SK)">Sikkim (SK)</option>
                    <option value="Tamil Nadu (TN)">Tamil Nadu (TN)</option>
                    <option value="Tripura (TR)">Tripura (TR)</option>
                    <option value="Uttar Pradesh (UP)">Uttar Pradesh (UP)</option>
                    <option value="Uttarakhand (UK)">Uttarakhand (UK)</option>
                    <option value="West Bengal (WB)">West Bengal (WB)</option>
                </select>

                {/* City */}
                <label for="city">City:</label>
                <input type="text" id="city" name="city" required  />

                {/* Area (in sq. ft) */}
                <label for="area">Area (in sq. ft):</label>
                <input type="number" id="area" name="area" required  />

                {/* Budget */}
                <label for="budget">Budget :</label>
                <input type="number" id="budget" name="budget" required  />

                {/* Plot / Agriculture Land / Apartment (Drop Down) */}
                <label for="propertyType">Property Type:</label>
                <select id="propertyType" name="propertyType" required>
                    <option value="">Select Property Type</option>
                    <option value="plot">Plot</option>
                    <option value="agriculture-land">Agriculture Land</option>
                    <option value="apartment">Apartment</option>
                </select>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
  );
}
