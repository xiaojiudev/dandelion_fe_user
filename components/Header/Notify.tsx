'use client'
import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Button, Divider, List, Popover, Skeleton } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Bell } from 'lucide-react'


interface DataType {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

export default function Notify() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<DataType[]>([])

    const loadMoreData = () => {
        if (loading) {
            return
        }

        setLoading(true)
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        loadMoreData()
    }, [])


    //get data and return product items in cart
    const content = (
        <div id="scrollableDiv" className='h-[60vh] w-[350px] overflow-y-scroll px-4'>
            {/* <List
                className='h-[223px] w-[400px] overflow-y-scroll'
                itemLayout="horizontal"
                dataSource={dataCart}
                renderItem={(item, index) => (
                    <List.Item >
                        <List.Item.Meta
                            avatar={<Avatar src={`${item.img}${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.desc}
                            className='items-center'
                        />
                        <div>{item.quantity}</div>
                    </List.Item>
                )}
            >
            </List> */}
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 50}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    bordered
                    className='overflow-hidden'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.email} className='bg-primary-50/50 hover:bg-white/60 cursor-pointer '>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}

                            />
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>

    )

    return (
        <>
            <Popover open content={content} placement='bottomRight' title={<div className='text-center select-none'>Recently Received Notifications</div>} className='mr-6 text-center'>
                <Badge count={5} className='flex items-center justify-center'>
                    <Button type="link" href='' className='bg-transparent' icon={<Bell size={24} strokeWidth={2} color='#9ca3af' />} size='small' ></Button>
                </Badge>
            </Popover>
        </>
    )
}
