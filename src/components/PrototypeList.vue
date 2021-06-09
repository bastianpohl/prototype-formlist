<template>
    <div class="container mx-auto px-4">
        <div class="mx-10 mt-4 pb-4 text-left">
            {{ data }}
        </div>     
        <div class="mx-10">
            <div class="inputbox relative rounded-t-sm shadow-md">
                <div class="border-b-2 bg-gray-50 border-gray-500 focus:outline-none">
                    <input 
                        type="search"
                        class=""
                        placeholder="Untermieter, Bankverbindung ändern"
                        v-model="search"
                    >
                    <div v-if="search !== ''" class="absolute inset-y-0 right-0 flex items-center" @click="clearSearch">
                        <span> X </span>
                    </div>
                </div>              
            </div>
            <div 
                v-for="category in list" 
                :key="category.categoryId"
                class="bg-gray-50"
                @click="setSearch(category.categoryTitle)"
            >
                    <span class="font-semibold  ">
                        {{ category.categoryTitle}}
                    </span>
                <div 
                    v-if="search !==''"
                    class="mt-2"
                >
                    <div v-for="form in category.forms" :key="form.formId"
                        class="hover:bg-gray-300 hover:text-white bg-white cursor-default rounded shadow-md mb-1"
                        @click="open"
                    >
                        {{form.title}}
                    </div>
                </div>      
            </div>   
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import formState from "../store/forms.js";

const data = `
    Sie haben Fragen bzgl. Ihres Mietverhälnis oder ein anderes Anliegen. Dann klicken Sie auf eine Thema oder 
    geben ein Schlagwort in das Suchfeld ein.
` 
const { getSearchFilter, setSearchFilter, filteredList } = formState()
const list  = filteredList()
const search = ref("")

const setSearch = (value) => {
    setSearch(value)
}

onMounted(()=> {
    setSearchFilter("")
})

watch(search, (value) => {
    setSearchFilter(value)
})

const clearSearch = () => {
    setSearchFilter("")
}
</script>

<style scoped>
.inputbox { 
  padding: 0 5px 0 0;
  overflow: hidden; }
.inputbox input { 
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
  text-align: center;
  }
</style>