import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Pable Picasso Painting Auction dApps",
    chainId: "galileo-4",
    createdDate: "2025-01-02T23:46:49.835Z",
    modifiedDate: "2025-01-02T23:46:49.835Z",
    id: "andromeda",
    collections: [
        {
            name: "Pable Picasso Collection",
            cw721: "andr1pz49lmlkr4a62dzg0zefxmm5aaf4y9yarpl3pa29y2v2tyhxgqds9p96w2",
            auction: "andr1pjy48cv42z9kxqshu8fprdpnks7n8u3fqkq0w6dvuqx7rk65atcq0hseht",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        }
    ],
};

export default CONFIG;
