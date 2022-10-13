package com.adateam.adpaievf.repository;

import com.adateam.adpaievf.domain.MentionsObligatoires;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the MentionsObligatoires entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MentionsObligatoiresRepository extends JpaRepository<MentionsObligatoires, Long> {}
