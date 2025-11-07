import React from "react";

export const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    return timestamp.toDate ? timestamp.toDate().toLocaleString() : 'Pending...';
};