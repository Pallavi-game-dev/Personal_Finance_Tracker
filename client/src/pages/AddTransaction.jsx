import { useState ,useEffect } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function AddTransaction() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income",
    category:""
  });
  const [categoriesList,setCategoriesList]=useState([])
  const { user } = useAuth();
  useEffect(()=>{
    categories().then(data=>{
      setCategoriesList(data);
    });
  },[]);

  const  handleSubmit = async(e) => {
    e.preventDefault();
    if (!form.title || !form.amount) {return;}
    try {
     console.log("CurrentUser user",user);
     
      const body ={
        "title":form.title,
        "amount":parseFloat(form.amount),
        "tranaction_type":form.tranaction_type,
        "category":Number(form.category),
        "user_id":Number(user.id)
      }
       console.log("CurrentUser body",body);
      const res = await API.post("/addtransaction", body);
      console.log(res);
    } catch (err) {
      alert(err?.response?.data?.message || "Transaction add failed");
    }
  };

 


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <select
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        onChange={(e) => setForm({ ...form, tranaction_type: e.target.value })}
      >
        <option value="CR">Income</option>
        <option value="DR">Expense</option>
      </select>

      <select
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        {categoriesList && categoriesList.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.category}
              </option>
            );
          })
        }
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

  async function categories(){
     try {
      const respons = await API.get('/getcategory')
      return respons.data.data;
    } catch (error) {
       alert(error.response?.data?.message || "Categories is not available");
    }
   
  }