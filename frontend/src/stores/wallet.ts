import { defineStore } from 'pinia'

interface WalletData {
  address: string
  acc_short: string
}

export const useWalletStore = defineStore('wallet', {
  state: () => {
    return {
      address: '',
      provider: null,
      acc_short: '',
    }
  },

  actions: {
    //@ts-ignore
    saveWalletData(payload: WalletData) {
      this.address = payload.address
      this.acc_short = `${payload.address.slice(
        0,
        2
      )}...${payload.address.slice(-4)}`;
			localStorage.setItem('walletStore', JSON.stringify(this.$state));
    },
		loadWalletData() {
      const data = localStorage.getItem('walletStore')
      if (data) {
        this.$state = JSON.parse(data)
      }
    },
		clearWalletData() {
      this.address = '',
      this.acc_short = ''
			localStorage.removeItem('walletStore');
    },
  },
})
