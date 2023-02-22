import {reactive} from 'vue'
import {MaybeRef} from "naive-ui/es/discrete/src/interface";
import {lightTheme, MenuOption} from "naive-ui";

export const store = reactive({
    provider: {
        configProviderPropsRef: {
            theme: lightTheme,
        },
        messageProviderProps: {
            placement: "bottom",
            duration: 1500,
            max: 2
        },
    } as MaybeRef<any> | undefined,
    menuOptions: [] as MenuOption[],
    app: {
        isKeyInputModalShow: false,
        isNewGistModalShow: false,
        isNewGistFileModalShow: false,
        language: 'en-US' as string,
    },
    gistsData: [] as Array<object>,
    loading: {
        menu: false,
        editor: false
    },
    menu:{
        activeKey: null as string | null,
        createNewGistKey: '' as string,
        createNewGistFileName: '' as string,
        avatar: '/img/github-logo.ico' as string,
    },
    editor: {
        textVal: "",
        filename: "",
        openingFile: false,//is currently opening file
        isLatestSaved: true,//saving status flag
    }
})