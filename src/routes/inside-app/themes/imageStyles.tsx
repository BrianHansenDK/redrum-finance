import { mainColors } from "./colors";
import mainShadows from "./shadows";

export const profileImage = {
    width: 150,
    height: 150,
    borderRadius: '50%',
    boxShadow: mainShadows.image,
    marginBottom: 15,
}

export const avatarPlaceholder = {
    width: 150,
    height: 150,
    backgroundColor: mainColors.dark,
    color: mainColors.white,
    fontSize: 45,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: mainShadows.image,
}