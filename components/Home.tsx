"use client";
import {Layout, Button} from "antd";

const {Content} = Layout;

export default function Home() {
  return (
    <Content>
      <main className="hero min-h-screen items-center">
        <div className="hero-content">
          <Button type="primary">Button</Button>
        </div>
      </main>
    </Content>
  );
}
