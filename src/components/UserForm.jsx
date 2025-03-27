import { useState } from "react";

export default function UserForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "user",
        gender: "male",
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            }
        } catch (error) {
            console.error("Ошибка при регистрации:", error);
        }
    };

    return (
        <div className="relative">
            {success && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
                    Успешная регистрация!
                </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex-1 overflow-auto md:ml-64">
                <h2 className="text-xl font-bold mb-4">Добавить пользователя</h2>
                <div className="mb-3">
                    <label className="block mb-1">Имя</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Фамилия</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-3">
                    <label className="block mb-1">Пароль</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Пол</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                    Добавить
                </button>
            </form>
        </div>
    );
}