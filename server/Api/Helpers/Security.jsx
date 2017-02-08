"use strict";
import mongoose from 'mongoose'

export function checkObjectId(objectId) {
	return objectId.match(/^[0-9a-fA-F]{24}$/) && mongoose.Types.ObjectId.isValid(objectId);
}