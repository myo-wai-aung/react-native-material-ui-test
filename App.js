import React, { useState } from "react";

import { 
    Button,
    Stack,
    ActivityIndicator,
    AppBar,
    Avatar,
    Banner,
    HStack,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Provider,
    Divider,
    FAB,
    ListItem
} from "@react-native-material/core";
import { StatusBar, StyleSheet, View, Text, TextInput } from "react-native";


const App = () => {
    const [visible, setVisible] = useState(false)
    return(
        <View style = {styles.container}>
            <AppBar
                title = "Title"
                variant="bottom"
            />

            <Stack style = {{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                <ActivityIndicator size="large" color="#00ff00"/>
                
                <Avatar label="MW" autoColor />
                
                <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg"}} />
            </Stack >
            <Divider />
            <Button title="Click"
                onPress={() => alert('Hello')}
                style={{ alignSelf: "center", marginTop: 20, width: 100, height: 40 }}
            />

            <Banner
                style = {{top: 420}}
                text="There was a problem processing a transaction on your credit card."
                buttons={
                <HStack spacing={2}>
                    <Button key="fix-it" variant="text" title="Fix it" compact />
                    <Button key="learn-more" variant="text" title="Learn More" compact />
                </HStack>
                }
            />
        <Provider>
            <Button
                title="Open Form Dialog"
                style={{ margin: 16 }}
                onPress={() => setVisible(true)}
            />

            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title="Dialog Header" />
                <DialogContent>
                    <Stack spacing={2}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                        <TextInput label="Email" variant="standard" />
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button
                        title="Cancel"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)}
                    />

                    <Button
                        title="Ok"
                        compact
                        variant="text"
                        onPress={() => setVisible(false)}
                    />
                </DialogActions>
            </Dialog>
        </Provider>

       <ListItem title="Your ..." />
       <ListItem title="Your ..." />
       <ListItem title="Your ..." />
       <ListItem title="Your ..." />
       <ListItem title="Your ..." />

        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default App