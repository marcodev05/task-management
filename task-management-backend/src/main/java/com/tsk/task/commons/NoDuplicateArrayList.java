package com.tsk.task.commons;

import java.util.ArrayList;

public class NoDuplicateArrayList<T> extends ArrayList<T> {
    @Override
    public boolean add(T t) {
        if (this.contains(t)) {
            return true;
        }
        return super.add(t);
    }
}
