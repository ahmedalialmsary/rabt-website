#!/bin/bash
WATCH_DIR="./agent-inbox"
mkdir -p "$WATCH_DIR"

echo "بدء مراقبة $WATCH_DIR..."

FIRST_RUN=true

inotifywait -m -e create "$WATCH_DIR" --format '%f' | while read FILENAME
do
    echo "رسالة جديدة: $FILENAME"
    CONTENT=$(cat "$WATCH_DIR/$FILENAME")
    
    if [ "$FIRST_RUN" = true ]; then
        agy --print --dangerously-skip-permissions --prompt "$CONTENT"
        FIRST_RUN=false
    else
        agy --print --continue --dangerously-skip-permissions --prompt "$CONTENT"
    fi
    
    rm "$WATCH_DIR/$FILENAME"
    echo "تمت المعالجة."
done
