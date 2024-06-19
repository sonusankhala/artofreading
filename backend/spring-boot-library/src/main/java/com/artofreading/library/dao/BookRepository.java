package com.artofreading.library.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artofreading.library.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
