# MongoDB Aggregation Pipeline Projection Error

This repository demonstrates a common error in MongoDB aggregation pipelines: Incorrect projection of fields after grouping. The `$project` stage was not correctly handling the renaming of the `_id` field, causing the final output to be incorrect. The solution shows how to correctly rename and project fields after a `$group` operation.