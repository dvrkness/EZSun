import React from 'react';
import {
    ImageBackground,
    ListRenderItemInfo,
    StyleSheet,
    View,
} from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Layout,
    List,
    Text,
    Toggle,
} from '@ui-kitten/components';
import { Article } from './extra/data';
import { firebase } from '../../../firebase/config';

const data: Article[] = [Article.howToEatHealthy()];

export default ({ navigation }): React.ReactElement => {
    const renderItem = (): React.ReactElement => (
        <View>
            <Card
                style={styles.item}
                onPress={() => navigation.navigate('DoiMatKhau')}
            >
                <Text>Đổi mật khẩu</Text>
            </Card>
            <Card
                style={styles.item}
                onPress={() => navigation.navigate('Theme')}
            >
                <Text>Chủ đề</Text>
            </Card>
            <Card style={styles.item} onPress={() => firebase.auth().signOut()}>
                <Text>Đăng xuất</Text>
            </Card>
        </View>
    );

    return (
        <Layout style={styles.container} level='2'>
            <List
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={data}
                renderItem={renderItem}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    item: {
        marginVertical: 8,
    },
    itemHeader: {
        height: 220,
    },
    itemContent: {
        marginVertical: 8,
    },
    itemFooter: {
        flexDirection: 'row',
        marginHorizontal: -8,
    },
    iconButton: {
        paddingHorizontal: 0,
    },
    itemAuthoringContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
});
