import { useCurrentUser } from '../hooks/useCurrentUser';

const UserProfile = () => {
    const { currentUser, loading, error, fetchUser } = useCurrentUser();

    if (loading) {
        return <div className="p-4">Loading user profile...</div>;
    }

    if (error) {
        return (
            <div className="p-4">
                <div className="text-red-600">Error: {error}</div>
                <button
                    onClick={fetchUser}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="p-4">
                <div className="text-gray-600">No user data available</div>
                <button
                    onClick={fetchUser}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Fetch User Data
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">User Profile</h3>
            <div className="space-y-2">
                <div>
                    <span className="font-medium">Name:</span> {currentUser.name || 'N/A'}
                </div>
                <div>
                    <span className="font-medium">Email:</span> {currentUser.email || 'N/A'}
                </div>
                <div>
                    <span className="font-medium">Role:</span> {currentUser.role || 'N/A'}
                </div>
                {currentUser.avatar && (
                    <div>
                        <span className="font-medium">Avatar:</span>
                        <img
                            src={currentUser.avatar}
                            alt="User avatar"
                            className="w-10 h-10 rounded-full ml-2"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile; 