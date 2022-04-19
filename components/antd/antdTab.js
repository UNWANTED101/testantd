import { Tabs } from 'antd';
import AntdForm from './antdForm';
import AntdTable from './antdTable';
export default function AntdTabs(){
    const { TabPane } = Tabs;

    function callback(key) {
    console.log(key);
    }

    const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
            <AntdForm/>
        </TabPane>

        <TabPane tab="Tab 2" key="2">
        <AntdTable/>
        </TabPane>

        <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
        </TabPane>
    </Tabs>
    );

    return (
    <div>
        <Demo/>
    </div>
    )
}