import React, { useState } from "react";

const Call = () => {
  const [loading, setLoading] = useState(false);
  const [callTo, setCallTo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(callTo);
    try {
      setLoading(true);
      const response = await fetch("/api/makeacall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(callTo),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      setLoading(false);
    }
  };
  return (
    <>
      <form
        className="flex flex-col items-center gap-4 "
        onSubmit={handleSubmit}
      >
        <label>
          CALL TO
          <input
            type="number"
            required
            name="to"
            placeholder="To(with Country code)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={callTo}
            onChange={(e) => setCallTo(e.target.value)}
          />
        </label>
        <button
          disabled={loading}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {loading ? "Calling ..." : "CALL"}
        </button>
      </form>
    </>
  );
};

export default Call;
