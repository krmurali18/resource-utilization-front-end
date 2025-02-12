import axios from 'axios';

const API_URL = 'http://localhost:8080/api/global-resource-allocations/';

export const getGlobalResourceAllocation = async () => {
    try {
        const response = await axios.get(API_URL, { timeout: 50000 });
        return response.data;
    } catch (error) {
        console.error('Error fetching global resource allocation:', error);
        throw error;
    }
};
