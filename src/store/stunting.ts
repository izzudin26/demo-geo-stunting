import { defineStore } from 'pinia'
import { data, TDistrictStunting } from '../dummy/districtStunting'

type TState = {
    selectedDistrict: number | null
    districts: TDistrictStunting[]
    showDistrict: boolean
    showData: boolean
}

export const stuntingStore = defineStore('stunting', {
    state: (): TState => ({
        selectedDistrict: null,
        districts: data,
        showDistrict: false,
        showData: false
    }),
    actions: {
        toggleShowData(){
            this.showData = !this.showData
        },
        toggleDistrict() {
            this.showDistrict = !this.showDistrict
            this.showData = false
        },
        selectDistrict(index: number | null) {
            this.selectedDistrict = index
            this.showDistrict = false
            this.showData = true
        }
    },
    getters: {
        district(): TDistrictStunting | null {
            if(this.selectedDistrict == null) return null
            return this.districts[this.selectedDistrict]
        }
    }
})