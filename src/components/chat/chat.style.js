const { default: styled } = require("@emotion/styled")
const { Paper, Box } = require("@mui/material")

export const CustomChatPaper = styled(Paper)({
    boxShadow: 'none',
    borderRadius: '12px', 
    height: '78vh'
})

export const ChatsContainer = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    padding: '30px 0px'
})

export const ChatListContainer = styled(Box)({
    maxHeight: '60vh',
    overflow: 'scroll'
})

export const ChatItem = styled(Box)(({ selected = false }) => ({
    padding: '15px 30px',
    cursor: 'pointer',
    backgroundColor: selected ? '#9299b8' : 'transparent',
    boxShadow: selected ? '0px 15px 50px #9299B833' : 'none',
    borderRadius: '12px',

    'span': {
        color: selected ? 'white !important' : 'inherit'
    },

    'h5': {
        color: selected ? 'white !important' : 'inherit'
    },

    ':hover': {
        'box-shadow': '0px 15px 50px #9299B833'
    }
}))