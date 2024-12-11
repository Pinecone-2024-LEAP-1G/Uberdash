const CreateBusinessAccount = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Бизнесийн аккаунт үүсгэх
        </h1>
        <form>
          <label className="block mb-4">
            Бизнесийн нэр:
            <input
              type="text"
              name="businessName"
              className="block border rounded p-2 w-full mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            НӨАТ-ийн дугаар:
            <input
              type="text"
              name="vatId"
              className="block border rounded p-2 w-full mt-1"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition"
          >
            Илгээх
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-flex items-center text-blue-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Нүүр хуудас руу буцах
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessAccount;
