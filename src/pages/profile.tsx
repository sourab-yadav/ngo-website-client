import { useEffect, useState } from "react";
import ContributionTable, { Contribution } from "../components/ContributionTable";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { saveAs } from "file-saver";
import { User, Mail, Phone, ArrowLeft } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

export const mockContributions: Contribution[] = [
  {
    id: 101,
    type: "Books",
    donationType: "Used",
    quantity: 10,
    description: "10 used school books (class 6–8)",
    date: "2024-11-20",
    status: "Approved",
    program: "Education for All",
  },
  {
    id: 102,
    type: "Clothes",
    donationType: "New",
    quantity: 5,
    description: "Winter jackets and sweaters for kids",
    date: "2025-01-10",
    status: "Pending",
    program: "Winter Warmth Drive",
  },
  {
    id: 103,
    type: "Toys",
    donationType: "Used",
    quantity: 7,
    description: "Educational toys and puzzles",
    date: "2024-12-05",
    status: "Approved",
    program: "Childhood Joy",
  },
  {
    id: 104,
    type: "Stationery",
    donationType: "New",
    quantity: 25,
    description: "Notebooks, pens, and pencils",
    date: "2025-02-14",
    status: "Rejected",
    program: "Back to School Kit",
  },
  {
    id: 105,
    type: "Food Packets",
    donationType: "New",
    quantity: 5,
    description: "Dry ration kits for 5 families",
    date: "2025-03-01",
    status: "Approved",
    program: "Community Nutrition",
  },
];

const mockUser = {
  username: "johndoe123",
  email: "john.doe@example.com",
  phone: "+91 98765 43210",
};

const Profile = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const axiosAuth = useAxiosAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // const response = await axiosAuth.get("/users/contributions");
        setContributions(mockContributions);
      } catch (err: any) {
        setError("Failed to load contributions.");
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const onDownloadReceipt = async (id: number) => {
    try {
      const response = await axiosAuth.get(
        `/users/contributions/${id}/receipt`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      saveAs(blob, `receipt-${id}.pdf`);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
    <div className="w-full max-w-6xl">
    <span
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 mb-4 "
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </span>
    </div>
      {/* User Info Card */}
      <div className="bg-white w-full max-w-4xl p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">User Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <User className="text-blue-500" />
            <span><strong>Username:</strong> {mockUser.username}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" />
            <span><strong>Email:</strong> {mockUser.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-red-500" />
            <span><strong>Mobile:</strong> {mockUser.phone}</span>
          </div>
        </div>
      </div>

      {/* Contribution Table */}
      <div className="bg-white w-full max-w-6xl p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Your Contributions</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : contributions.length === 0 ? (
          <p className="text-center text-gray-500">No contributions found.</p>
        ) : (
          <ContributionTable
            data={contributions}
            onDownloadReceipt={onDownloadReceipt}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
