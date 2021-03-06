import httpService from '../services/http.service';

export default {
    getFlashSale: async (pageIndex) =>
        await httpService.get(
            `https://api.sunsale.vn/api/v1/pages/products/Tiki?page=${pageIndex}&quantity=20`,
        ),
    getDiscount: async () =>
        await httpService.get(
            'https://www.sunsale.vn/_next/data/MdQ0_M7ln95l5ZqaB8nyj/ma-giam-gia.json?stage=1',
        ),
};
