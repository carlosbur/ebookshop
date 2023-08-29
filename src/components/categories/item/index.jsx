import { TouchableHighlight, ImageBackground, Text} from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes/colors";

const CategoryItem = ({id, 
    name, 
    backgroundColor,
    backgroundImage, onSelectCategory, style }) => {

        return (
            <TouchableHighlight 
                onPress={() => onSelectCategory(id)} 
                style={[ styles.container, { backgroundColor }]}
                underlayColor={COLORS.grey}>
                <ImageBackground 
                source={{uri: backgroundImage}} 
                style={ [styles.imageBackground, style]} 
                resizeMode= {"cover"}>
                <Text style={ styles.categoryName}>{name}</Text>
                </ImageBackground>
            </TouchableHighlight>
        )
    }

export default CategoryItem