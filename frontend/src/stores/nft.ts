import { defineStore } from 'pinia'

interface NftData {
    id: number
    key: string
    caption: string
    src: string
}

export const useNftStore = defineStore('nft', {
    state: () => {
        return {
            nfts: [] as NftData[],
        }
    },

    actions: {
        loadNftData() {
            // getNftData().then((NftData) => {
            //     this.nfts = NftData;
            // });
        }
    },
})

// import contract from "../../contracts/contractInstance";

// async function getNftData(): Promise<NftData[]> {
//     const currentNftData: NftData[] = [];
//     const counter = await contract.methods.getCounter();

//     if (counter !== null) {
//         const hashes = [];

//         for (let i = counter; i >= 1; i -= 1) {
//             hashes.push(contract.methods.getHash(i));
//         }

//         const postHashes = await Promise.all(hashes);

//         for (let i = 0; i < postHashes.length; i += 1) {
//             currentNftData.push({
//                 id: i,
//                 key: `key${i}`,
//                 caption: postCaptions[i],
//                 src: `https://gateway.ipfs.io/ipfs/${postHashes[i].img}`,
//             });
//         }
//     }
//     return currentNftData;
// };
