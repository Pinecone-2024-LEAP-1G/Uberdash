"use client"

import { Star } from 'lucide-react';
import moment from 'moment';

export type RatingInfoProps = {
    name: string;
    rating: number;
    date: string;
    comment: string;
}

export const RatingInfo = ({ name, rating, date, comment }: RatingInfoProps) => {

    const formattedDate = moment(date).format("YYYY/MM/DD")

    return (
        <div className=" w-[591px] border rounded-xl p-4">
            <p className="font-medium text-base">{name}</p>
            <div className="flex my-1">
                <div className="rating flex">
                    <Star style={{ width: 18, height: 18 }} fill={rating >= 1 ? 'black' : 'white'} />
                    <Star style={{ width: 18, height: 18 }} fill={rating >= 2 ? 'black' : 'white'} />
                    <Star style={{ width: 18, height: 18 }} fill={rating >= 3 ? 'black' : 'white'} />
                    <Star style={{ width: 18, height: 18 }} fill={rating >= 4 ? 'black' : 'white'} />
                    <Star style={{ width: 18, height: 18 }} fill={rating >= 5 ? 'black' : 'white'} />
                </div>
                <span>&nbsp;•&nbsp;</span>
                <p className="text-gray-500 text-sm">{formattedDate}</p>
            </div>
            <div className='text-sm'>{comment}</div>
        </div>
    )
}