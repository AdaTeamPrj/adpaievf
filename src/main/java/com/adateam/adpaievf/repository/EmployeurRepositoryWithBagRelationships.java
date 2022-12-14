package com.adateam.adpaievf.repository;

import com.adateam.adpaievf.domain.Employeur;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface EmployeurRepositoryWithBagRelationships {
    Optional<Employeur> fetchBagRelationships(Optional<Employeur> employeur);

    List<Employeur> fetchBagRelationships(List<Employeur> employeurs);

    Page<Employeur> fetchBagRelationships(Page<Employeur> employeurs);
}
