// import Games from "@mui/icons-material/Games";
import CasinoIcon from '@mui/icons-material/Casino';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const gameMenu = [
    {
        name: "showdown",
        name_i18_key: "menu.showdown",
        icon: CasinoIcon,
        path: "/game/showdown"
    },
    {
        name: "finger_guessing",
        name_i18_key: "menu.finger_guessing",
        icon: VideogameAssetIcon,
        path: "/game/finger-guessing"
    },
    {
        name: "free_bank",
        name_i18_key: "menu.free_bank",
        icon: VideogameAssetIcon,
        path: "/game/free-bank"
    },

    {
        name: "free_bank",
        name_i18_key: "menu.reset_auth",
        icon: VideogameAssetIcon,
        path: "/game/reset-auth"
    },
]

export  default  gameMenu