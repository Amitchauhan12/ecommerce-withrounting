import React from "react";
import { Box, Rating } from "@mui/material";

function CustomerRatings() {
    return (
        <>
            <Box sx={{
                      display: "grid",
                      columnGap: 3,
                      rowGap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                <div className="flex flex-col justify-center items-center">
                    <span>Overall Rating</span>
                    <h1>4.6</h1>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span>Overall Rating</span>
                    <h1>4.6</h1>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>
            </Box>
        </>
    )
}

export default CustomerRatings;