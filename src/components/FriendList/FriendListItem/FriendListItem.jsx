import { Item, Status, Avatar, Name  } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline, id }) => { 
    return <Item key={id}>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>
}