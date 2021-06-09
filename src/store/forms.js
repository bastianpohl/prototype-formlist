import { reactive, ref, readonly, computed } from "vue"

const data = [
    {
        categoryId: 1,
        categoryTitle: "Mietverhältnis",
        descriptions: "Sie haben Fragen rund um hier Mietverhältnis",
        forms: [
            {
                formId: 1, 
                title: "Allgemeine Fragen zum Mietverhältnis",
                tags: ["mietverhältnis", "allgemein"]
            },
            {
                id: 2, 
                title: "Allgemeine Fragen zur Neuvermietung",
                tags: ["mietverhältnis", "neuvermietung", "wohnungsübergabe", "vermieter"],
            },
        ]
    },
    {
        categoryId: 2,
        categoryTitle: "Vertragsänderung",
        descriptions: "Sie möchten Ihre Banvkerbindung oder eine Untervermietung beantragen",
        forms: [
            {
                formId: 3, 
                title: "Bankverbindung ändern",
                tags: ["vertragsänderung", "bankverbindung", "lastschrift", "sepa", "mandat", "abbuchung"]
            },
            {
                formId: 4, 
                title: "Rückfrage zur Miethöhe",
                tags: ["vertragsänderung", "miete", "miethöhe"],
            },
            {
                formId: 5, 
                title: "Rückstand abbuchen",
                tags: ["vertragsänderung", "miete", "rückstand", "lastschrift", "abbuchung", "schulden", "rueckstand", ""],
            },
            {
                formId: 6, 
                title: "Untervermietung anfragen",
                tags: ["vertragsänderung", "miete", "untervermietung", "untermieter" ],
            },
        ]
    },
    {
        categoryId: 3,
        categoryTitle: "Nachbarschaftsanliegen",
        descriptions: "Sie haben Probleme mit Ihrer Nachbarn und suchen einen Rat",
        forms: [
            {
                formId: 6, 
                title: "Ruhestörung melden",
                tags: ["ruhestörung", "lärmbelästigung", "nachbarschaft"]
            }
        ]
    }
]

const state = reactive(data)
const searchFilter = ref('')

const filterForms = (forms) => {
    if (searchFilter.value == '') return forms
}

const getters = {
    filteredList:  () => { 
        return computed(() => {
            return state.filter(category => category.categoryTitle.includes(searchFilter.value))
        })
    },
    getSearchFilter: () => { 
        return computed(() => searchFilter.value)
    }
}

const actions = {
    setSearchFilter: (searchString) => { searchFilter.value = searchString}
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions
})
